import styles from './FormLoadAvatar.module.css'

interface Props {
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void,
    formRef: React.RefObject<HTMLFormElement>;
    disabled: boolean
}

export default function FormLoadAvatar({ onSubmit, formRef, disabled }: Props) {
    return (
        <form onSubmit={onSubmit} encType="multipart/form-data" ref={formRef} className={styles.form} >
            <input type="file" name="avatar" />
            <button type='submit' disabled={disabled} className={styles.btn}>submit</button>
        </form>
    )
}