import { Avatar } from './Avatar'
import styles from './Sidebar.module.css'
import { PencilSimpleLine } from 'phosphor-react'
export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img  className={styles.cover} 
            src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50"
            />
            
            <div className={styles.profile}>
                <Avatar hasBorder src="https://avatars.githubusercontent.com/u/116582484?v=4" />
                <strong>Lucas Loureiro</strong>
                <span>Web Developer</span>
                
            </div>
            <footer>
                    
                    <a href="#">
                    <PencilSimpleLine 
                    size={20}
                    color="#00B37E" />
                        Editar seu perfil
                    </a>
                </footer>
            
        </aside>
    )
}