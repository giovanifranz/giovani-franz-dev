import { useForm } from 'react-hook-form';
import type { ToastOptions } from 'react-toastify';
import { toast, ToastContainer } from 'react-toastify';
import { useCallback } from 'react';

const regex = new RegExp(
  '^(([^<>()[\\]\\\\.,;:\\s@\\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\\"]+)*)|' +
    '(\\".+\\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])' +
    '|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$',
);

const TOAST_CONFIG: ToastOptions = {
  position: 'top-right',
  autoClose: 1500,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: true,
  progress: undefined,
};

type FormValues = {
  name: string;
  email: string;
  message: string;
};

const INITIAL_STATE: FormValues = {
  name: '',
  email: '',
  message: '',
};

export function Form() {
  const { register, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: INITIAL_STATE,
  });

  const sendEmail = useCallback(
    async (values: FormValues) => {
      const data = { ...values };
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
      );
      if (response.ok) {
        reset();
      }
    },
    [reset],
  );

  return (
    <form onSubmit={handleSubmit(sendEmail)} className="w-full max-w-sm mt-4">
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
          className="peer border-white focus:border-red text-white block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none focus:outline-none"
          placeholder=" "
          {...register('name', { required: true })}
        />
        <label className="text-white peer-focus:text-red peer-focus:font-medium absolute text-sm duration-300 -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
          Nome
        </label>
      </div>
      <div className="group relative z-0 mb-6 w-full">
        <input
          type="email"
          className="peer border-white focus:border-red text-white block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none focus:outline-none"
          placeholder=" "
          {...register('email', { required: true, pattern: regex })}
        />
        <label className="text-white peer-focus:text-red peer-focus:font-medium absolute text-sm duration-300 -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
          E-mail
        </label>
      </div>
      <div className="group relative z-0 mb-6 w-full ">
        <textarea
          className="peer border-white h-60 resize box-border bg-transparent focus:border-red text-white block py-2.5 px-0 w-full text-sm  border-0 border-b-2 appearance-none focus:outline-none "
          placeholder=" "
          {...register('message', { required: true })}
        />
        <label className="text-white peer-focus:text-red peer-focus:font-medium absolute text-sm duration-300 -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
          Mensagem
        </label>
      </div>
      <button
        className="bg-red py-3 px-9 text-xl font-medium hover:opacity-80"
        type="submit"
      >
        Enviar
      </button>
    </form>
  );
}
