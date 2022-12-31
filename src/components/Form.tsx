import { useForm } from 'react-hook-form'
import type { ToastOptions } from 'react-toastify'
import { toast, ToastContainer } from 'react-toastify'
import { useCallback } from 'react'
import { Subtitle } from './Subtitle'

const regex = new RegExp(
  '^(([^<>()[\\]\\\\.,;:\\s@\\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\\"]+)*)|' +
    '(\\".+\\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])' +
    '|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$',
)

const TOAST_CONFIG: ToastOptions = {
  position: 'top-right',
  autoClose: 1500,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: true,
  progress: undefined,
}

type FormValues = {
  name: string
  email: string
  message: string
}

const INITIAL_STATE: FormValues = {
  name: '',
  email: '',
  message: '',
}

export function Form() {
  const { register, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: INITIAL_STATE,
  })

  const sendEmail = useCallback(
    async (values: FormValues) => {
      const data = { ...values }
      const response = await toast.promise(
        fetch('/api/send-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        }),
        {
          pending: 'E-mail já está sendo enviado!',
          success: 'E-mail enviado com Sucesso!',
          error: 'Erro ao enviar e-mail!',
        },
        TOAST_CONFIG,
      )
      if (response.ok) {
        reset()
      }
    },
    [reset],
  )

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
            id="name"
            className="peer block w-full appearance-none border-0 border-b-2 border-white bg-transparent py-2.5 px-0 text-sm text-white focus:border-red focus:outline-none"
            placeholder=" "
            {...register('name', { required: true })}
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
            id="email"
            className="peer block w-full appearance-none border-0 border-b-2 border-white bg-transparent py-2.5 px-0 text-sm text-white focus:border-red focus:outline-none"
            placeholder=" "
            {...register('email', { required: true, pattern: regex })}
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
            id="message"
            className="peer box-border block h-60 w-full resize appearance-none border-0 border-b-2 border-white bg-transparent py-2.5 px-0  text-sm text-white focus:border-red focus:outline-none "
            placeholder=" "
            {...register('message', { required: true })}
          />
          <label
            htmlFor="message"
            className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 text-sm text-white duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-red"
          >
            Mensagem
          </label>
        </div>
        <button
          className="bg-blue py-3 px-9 text-xl font-medium hover:opacity-80"
          type="submit"
        >
          Enviar
        </button>
      </form>
    </article>
  )
}
