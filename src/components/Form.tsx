import { useForm } from 'react-hook-form'
import type { ToastOptions } from 'react-toastify'
import { toast, ToastContainer } from 'react-toastify'
import { useCallback, useId } from 'react'
import { Subtitle } from './Subtitle'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const TOAST_CONFIG: ToastOptions = {
  position: 'top-right',
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: true,
  progress: undefined,
}

const emailFormSchema = z.object({
  name: z
    .string()
    .min(3, { message: 'O nome requer no mínimo 3 carácteres' })
    .max(25, { message: 'O nome requer no máximo 25 carácteres' }),
  email: z
    .string()
    .min(3, { message: 'O e-mail requer no mínimo 3 carácteres' })
    .max(30, { message: 'O e-mail requer no máximo 30 carácteres' })
    .email()
    .transform((email) => email.toLowerCase()),
  message: z
    .string()
    .min(3, { message: 'A mensagem requer no mínimo 3 carácteres' })
    .max(250, { message: 'A mensagem requer no máximo 250 carácteres' }),
})

type FormValues = z.infer<typeof emailFormSchema>

export function Form() {
  const toastLoadingId = useId()
  const toastErrorId = useId()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
    mode: 'all',
    resolver: zodResolver(emailFormSchema),
  })

  const sendEmail = useCallback(
    async (values: FormValues) => {
      const loading = () =>
        toast('E-mail já está sendo enviado!', {
          ...TOAST_CONFIG,
          autoClose: 12000,
          toastId: toastLoadingId,
          type: toast.TYPE.INFO,
        })

      loading()

      try {
        const { status } = await fetch('/api/send-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(values),
        })

        if (status !== 200) {
          throw new Error('Erro ao enviar e-mail!')
        }

        toast.update(toastLoadingId, {
          ...TOAST_CONFIG,
          render: 'E-mail enviado com Sucesso!',
          type: toast.TYPE.SUCCESS,
          autoClose: 2500,
        })
        reset()
      } catch (err) {
        console.error(err)
        toast.update(toastLoadingId, {
          ...TOAST_CONFIG,
          render: 'Erro ao enviar e-mail!',
          type: toast.TYPE.ERROR,
          autoClose: 2500,
        })
      }
    },

    [reset, toastLoadingId],
  )

  const ValidateForm = useCallback(() => {
    const errorToast = (message?: string) =>
      toast(message, {
        ...TOAST_CONFIG,
        autoClose: 1500,
        type: toast.TYPE.WARNING,
        toastId: toastErrorId,
      })

    if (errors.name?.message) {
      errorToast(errors.name.message)
    }
    if (errors.email?.message) {
      errorToast(errors.email.message)
    }
    if (errors.message?.message) {
      errorToast(errors.message.message)
    }
  }, [errors.email, errors.message, errors.name, toastErrorId])

  return (
    <article className="w-11/12 max-w-[600px] md:w-1/2">
      <header>
        <Subtitle text="Se precisar de mim" />
      </header>
      <br />
      <form onSubmit={handleSubmit(sendEmail)} className="md:w-80">
        <ToastContainer
          className="z-50"
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <div className="group relative z-0 mb-6 ">
          <input
            type="text"
            className="peer block w-full appearance-none border-0 border-b-2 border-white bg-transparent px-0 py-2.5 text-sm text-white focus:border-red focus:outline-none"
            placeholder=" "
            {...register('name')}
          />
          <label
            htmlFor="name"
            className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 text-sm text-white duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-red"
          >
            Nome
          </label>
        </div>
        <div className="group relative z-0 mb-6 w-full">
          <input
            type="email"
            className="peer block w-full appearance-none border-0 border-b-2 border-white bg-transparent px-0 py-2.5 text-sm text-white focus:border-red focus:outline-none"
            placeholder=" "
            {...register('email')}
          />
          <label
            htmlFor="email"
            className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 text-sm text-white duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-red"
          >
            E-mail
          </label>
        </div>
        <div className="group relative z-0 mb-6 w-full ">
          <textarea
            className="peer box-border block h-60 w-full resize appearance-none border-0 border-b-2 border-white bg-transparent px-0 py-2.5  text-sm text-white focus:border-red focus:outline-none "
            placeholder=" "
            {...register('message')}
          />
          <label
            htmlFor="message"
            className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 text-sm text-white duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-red"
          >
            Mensagem
          </label>
        </div>
        <button
          disabled={isSubmitting}
          onClick={ValidateForm}
          className="bg-blue px-9 py-3 text-xl font-medium hover:opacity-80"
          type="submit"
        >
          Enviar
        </button>
      </form>
    </article>
  )
}
