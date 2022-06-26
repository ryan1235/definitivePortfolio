import { useForm, ValidationError } from '@formspree/react';


export default function Form() {
        const [state, handleSubmit] = useForm("xlezkpwy");
        if (state.succeeded) {
            return <p>Formulario Enviado</p>;
        }
    return (
        <form className='flex flex-col items-center gap-4' onSubmit={handleSubmit}>
            <div className='flex gap-8'>
            <input
                required
                placeholder="Endereço de Email"
                id="email"
                type="email"
                name="email"
                className='bg-transparent border border-slate-200 text-center rounded-lg py-1'
            />
            <ValidationError
                requere
                prefix="nome"
                field="nome"
                errors={state.errors}
            />
            <input
                required
                placeholder="Nome"
                id="nome"
                type="text"
                name="nome"
                    className='bg-transparent border border-slate-200 text-center rounded-lg'
            />
            <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
                />
            </div>
            <textarea
                placeholder="Mais Informações..."
                id="message"
                name="message"
                className='w-full bg-transparent border border-slate-200 text-center p-2 rounded-lg'
            />
            <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
            />
            <button type="submit" className='border border-slate-200 px-1 py-1 rounded-lg ' disabled={state.submitting}>
                Enviar
            </button>
        </form>
    )

}
