

interface IconProps {
    width? : number,
    height? : number,
}

export const LightIcon = ({width,height} : IconProps) => {

    return(
        <svg width={width || '100'} height={height || '100'} viewBox="0 0 24 24" fill="#FFD700" xmlns="http://www.w3.org/2000/svg">
  <path d="M6.995 12c0-2.761 2.246-5 5.005-5s5.005 2.239 5.005 5-2.246 5-5.005 5-5.005-2.239-5.005-5zm13-1h3v2h-3v-2zm-18 0h3v2h-3v-2zm8-8h2v3h-2v-3zm0 18h2v3h-2v-3zm7.778-15.364l1.414-1.414 2.121 2.122-1.414 1.414-2.121-2.122zm-11.314 11.314l1.414-1.414 2.121 2.122-1.414 1.414-2.121-2.122zm13.435 1.414l-1.414-1.414 2.121-2.122 1.414 1.414-2.121 2.122zm-11.314-11.314l-1.414-1.414 2.121-2.122 1.414 1.414-2.121 2.122z"/>
</svg>
    )

}   