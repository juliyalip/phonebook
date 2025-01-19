import style from './Filter.module.css'

interface IProps {
    value: string,
    onFilter: (input: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Filter({ value, onFilter }: IProps) {
    return (
        <input type="text" onChange={onFilter} value={value} name="filter" className={style.filter} placeholder='search' />
    )
}