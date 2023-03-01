interface SVGProps {
    className?: string;
}
const ArrowRight = (props: SVGProps) => {
    return (
        <svg className={props.className} width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.488155 0.488155C1.13903 -0.162718 2.1943 -0.162718 2.84518 0.488155L12.5506 10.1935C13.3641 11.0071 13.3641 12.3262 12.5506 13.1398L2.84518 22.8452C2.1943 23.4961 1.13903 23.4961 0.488155 22.8452C-0.162719 22.1943 -0.162719 21.139 0.488155 20.4882L9.30965 11.6667L0.488155 2.84518C-0.162719 2.1943 -0.162719 1.13903 0.488155 0.488155Z" fill="#EDC978"/>
        </svg>
    )
}

export default ArrowRight;
