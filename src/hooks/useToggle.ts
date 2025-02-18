import{ useState} from 'react'

export const useToggle = (value: boolean): [boolean, () => void] => {
    const [isOpen, setIsOpen] = useState<boolean>(value);
    const toggle = () => {
        setIsOpen(prev => !prev);
    };

    return [isOpen, toggle];
};