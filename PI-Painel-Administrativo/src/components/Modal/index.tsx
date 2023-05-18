import Modal from '@mui/material/Modal';
import { ModalContainer, H1Styled, ModalContent, ModalTitle } from './styles';

export type ModalProps = {
    open: boolean
    onClose(open: boolean): void
    children: React.ReactNode
    title: string
}

export function ModalStyled({ children, open, onClose, title }: ModalProps) {
    return (
        <Modal
            keepMounted
            open={open}
            onClose={onClose}
        >
            <ModalContainer>
                <ModalTitle>
                    <H1Styled>
                        {title}
                    </H1Styled>
                </ModalTitle>
                <ModalContent>
                    {children}
                </ModalContent>
            </ModalContainer>
        </Modal>

    );
}