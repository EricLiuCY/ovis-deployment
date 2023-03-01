import { PartnerOverview as Partner } from '@/../types';
import { useNextSanityImage } from 'next-sanity-image';
import sanityClient from '@/utils/sanity/client'
import { withAssetFileName } from '@/utils/sanity/index'
import Image from 'next/image';
interface PartnerProps {
    partner: Partner,
}

function Partner({ partner }: PartnerProps) {
    // @ts-ignore
    const imageProps = useNextSanityImage(sanityClient, partner.profilePicture.image)
    console.log('asdasd', imageProps)
    return (
        <div>
            {/*// @ts-ignore */}
            <Image {...imageProps} loader={withAssetFileName} height={100} width={50} alt={partner.profilePicture}/>
            <h2>{partner.founderName}</h2>
            <h2>{partner.founderTitle}</h2>
            <h2>{partner.founderSummary}</h2>
        </div>
    )
}

export default Partner;