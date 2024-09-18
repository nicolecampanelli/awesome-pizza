export interface ICustomButton {
  linkPath?: string
  customClassname: string
  label: string
  buttonCallback?: () => void
  isButtonDisabled?: boolean
  type?: 'button' | 'submit' | 'reset' | undefined
}