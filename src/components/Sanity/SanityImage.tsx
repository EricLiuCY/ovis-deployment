import sanityClient from '@/utils/sanity/client';
import Image from 'next/image';

import { withAssetFileName } from '@/utils/sanity/index';
import { useNextSanityImage } from 'next-sanity-image';
import { PartnerOverview } from '../../../types';

export interface SanityIamgeProps {
    image: any,
}

export default function SanityImage({ image }: SanityIamgeProps) {
  const imageProps : any = useNextSanityImage(sanityClient as any, image)
  return (
    <Image {...imageProps} loader={withAssetFileName} height={100} width={50} alt={'asd'}/>
  )
}