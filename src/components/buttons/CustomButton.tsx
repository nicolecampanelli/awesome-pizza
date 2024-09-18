import Link from 'next/link';
import { Button } from "../ui/button";
import { ICustomButton } from '@/interface/components/buttons/ICustomButton';
import { ReactElement } from 'react';

export const CustomButton = ({ linkPath, customClassname, label, buttonCallback, type, isButtonDisabled = false }: ICustomButton): ReactElement => {
  const defaultButton = (
    <Button disabled={isButtonDisabled} type={type} className={customClassname} onClick={buttonCallback}>
      {label}
    </Button>
  );

  return linkPath ? (
    <Link href={linkPath} passHref>
      {defaultButton}
    </Link>
  ) : (
    defaultButton
  );
};
