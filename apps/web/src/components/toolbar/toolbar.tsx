import { GetShadesForm } from '@/components/get-shades-form'
import cn from './styles.module.css'

export const Toolbar = () => {
  return (
    <div className={cn.toolbar}>
      <GetShadesForm />
    </div>
  )
}
