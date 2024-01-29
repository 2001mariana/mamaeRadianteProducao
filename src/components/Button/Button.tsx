
import classNames from 'classnames'
import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string
    variant: 'neon' | 'outlined' 
    color: 'Green' | 'Purple' | 'Orange' | 'none'
    size: 'Large' | 'Small'
    children?: JSX.Element
    espacamentoChildren?: boolean
    id?:string
    isRounded?: boolean
    animation?: 'shake'
    className?: string
}

function Button({ text, variant, color, size, isRounded = true, espacamentoChildren = true , className, id, animation, children, ...props }: ButtonProps) {

    const buttonClasses = classNames(
        'Button',
        `Button--${variant}`,
        `Button--${color}`,
        `Button--${size}`,
        `Button--${size}`,
        `Button__isRounded--${isRounded}`,
        `${className}`
      )
    
      const buttonChildrenClasses = (espacamentoChildren ? 'Button__children' : '')

  return (
    <button id={id} className={buttonClasses} {...props}>
        {children ? <span className={buttonChildrenClasses}>{children}</span> : null }
        <div className='Button__title'>{text}</div>
    </button>
  );
}

export default Button;
