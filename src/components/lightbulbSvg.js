import * as React from "react"

function SvgComponent(props) {
  return (
    <svg
      width={93}
      height={120}
      viewBox="0 0 93 157"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M63.674 108.103c-1.073-1.378-2.653-1.448-4.301-1.205-1.977.291-3.988.635-5.956 1.214-4.779 1.404-9.277 3.617-13.467 6.509-.468.324-.732.911-1.336 1.692 1.235-.005 2.033.086 2.853-.025 6.828-.92 13.478-3.087 19.924-6.438.814-.422 1.493-1.132 2.283-1.747zm-4.636 17.909c1.842-.758 3.575-1.497 5.322-2.178 1.03-.402 1.97-.811 2.226-1.998-1.273-.825-2.08-1.88-.7-3.677.646-.843.746-1.593.04-2.183-.819-.684-1.838-.759-3.018-.204-1.655.778-3.308 1.561-4.968 2.324a150.032 150.032 0 01-3.963 1.766c-.598.254-1.367.719-1.678.06-.33-.7.493-.997 1.093-1.294.682-.339 1.38-.642 2.072-.96 2.56-1.178 5.132-2.325 7.675-3.546 2.093-1.005 3.319-3.31 2.664-4.846-9.014 5.719-15.289 7.831-27.628 9.285-.493.842.048 1.238.56 1.633.598.463 1.62.775 1.715 1.392.092.607-.733 1.516-1.181 2.286-.477.822-.826 1.605-.228 2.281.582.657 1.306.986 2.48.623 2.145-.664 4.297-1.284 6.444-1.93.763-.229 1.608-.7 2.03.423-.625.319-1.232.73-1.873.939a136.315 136.315 0 01-6.01 1.822c-2.039.563-3.25 2.331-2.06 3.437 1.097 1.022 1.063 2.056.264 3.455-.085.147.03.345.052.505 4.496 1.091 20.826-5.241 24.706-9.561-.223-.679-.83-.558-1.527-.273-.914.373-1.824.768-2.749 1.088-.692.241-1.474.514-1.76-.669zm4.771-20.706c.107-.975.183-1.466.21-1.948.314-5.523 1.172-11.082 3.157-16.73 1.481-4.213 3.057-8.43 4.279-12.647 1.325-4.583 2.335-9.085.635-13.26-1.52-3.73-3.511-7.01-7.06-9.242-6.162-3.876-13.695-4.67-22.322-2.44-12.254 3.171-21.39 10.122-26.825 20.598-4.227 8.149-3.833 15.456 1.331 21.227 3.477 3.887 7.587 7.277 12.123 10.24 3.899 2.546 6.964 5.656 8.295 10.041.214.706.574 1.349.895 2.088.775-.463 1.364-.809 1.946-1.164 3.883-2.362 7.931-4.306 12.187-5.627 3.704-1.149 7.46-2.527 11.15-1.136zm2.685 8.222c2.623 2.088 2.624 2.089.994 5.837.27.241.674.451.842.79.244.492.589 1.088.413 1.618-.486 1.456-1.313 2.86-1.425 4.383-.044.58-1.161 1.439-1.93 2.007-1.646 1.216-3.384 2.325-5.19 3.55-.223 2.441-1.862 4.136-4.668 5.267-2.747 1.108-4.866 1.067-5.997-1.024-1.803.438-3.451.872-5.1 1.227-1.074.231-2.166.435-3.22.495-2.696.154-3.594-.994-2.771-3.388.086-.248.163-.498.283-.867-1.655-1.076-1.746-2.714-.513-4.873-2.313-1.444-2.283-3.563-.12-6.134-.542-.372-1-.647-1.402-.971-.725-.585-1.16-1.383-.869-2.373 1.01-3.433-.224-6.108-1.4-8.811-1.767-4.064-5.32-6.643-9.349-8.805-3.083-1.654-6.017-3.442-8.355-5.842-4.868-4.997-7.182-11.116-5.835-18.711 1.556-8.776 6.864-16.31 15.558-22.407 11.22-7.867 22.746-10.802 34.144-7.844 7.685 1.994 12.3 6.715 14.153 13.7 1.61 6.072.472 12.414-2.271 18.995-2.142 5.136-4.209 10.27-5.052 15.458-.643 3.958-1.003 7.864-.76 11.67.02.333.06.796.312.91 1.846.829 1.272 2.432.66 4.027-.261.683-.715 1.348-1.132 2.116zM73.444 17.927c1.586.266 1.68.339 1.065 1.498a24.106 24.106 0 01-1.808 2.927 2727.59 2727.59 0 01-11.132 15.15 11.245 11.245 0 01-1.547 1.72c-.549.486-1.349.896-1.832.414-.268-.267-.136-.93-.014-1.416.084-.331.461-.665.71-.996 4.673-6.238 9.344-12.475 14.02-18.71.16-.213.368-.404.538-.587zM2.115 32.18c.625.297 1.288.49 1.771.859 4.442 3.39 8.86 6.805 13.263 10.234.509.396.96.874 1.287 1.405.137.225.008.778-.23 1.017-.23.231-.83.401-1.132.334-.556-.126-1.094-.368-1.499-.694-4.43-3.566-8.837-7.152-13.238-10.744-.657-.536-1.212-1.14-.222-2.41zM35.46 22.634c.45 3.782.912 7.561 1.333 11.35a8.997 8.997 0 01-.032 2.33c-.048.317-.547.924-.797.956-.466.058-1.126-.084-1.3-.366-.316-.514-.4-1.173-.471-1.801-.38-3.347-.714-6.706-1.092-10.053-.177-1.579-.462-3.13-.603-4.719-.063-.712-.378-1.683 1.005-2.064 1.382-.383 1.328.665 1.458 1.378.183.99.272 2.009.4 3.016l.1-.027z"
        fill="#000"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M35.192 74.823c.127-2.24-.253-2.985-1.738-3.457-.477 1.649.319 2.554 1.738 3.457zm12.944-2.974c-2.323 4.395-6.31 5.64-10.81 5.79-.56 1.223-1.083 2.368-1.612 3.528-1.124.02-1.545-.263-1.288-1.067.2-.624.392-1.25.63-1.87.292-.766.164-1.255-.623-1.597-1.293-.561-2.334-1.418-2.717-2.666-.238-.776-.326-1.719-.051-2.568.505-1.561 2.431-2.248 3.575-1.285.68.573 1.092 1.415 1.44 2.223.31.717.448 1.533.511 2.342.069.866.58 1.15 1.574 1.104 2.124-.099 4.133-.706 5.928-2.068 1.768-1.34 2.063-2.65 1.167-4.07-.386-.614-.632-1.324-.807-2.037-.057-.224.267-.769.517-.872.368-.153 1.035-.199 1.207-.016.505.535.981 1.145 1.187 1.835.303 1.02 1.06 1.567 2.177 1.803 1.889.4 3.914.38 6-.227.87-.253 1.718-.825 2.523-1.328.503-.316 1.04-.718 1.371-.3.193.243.098.93-.178 1.183-.676.62-1.478 1.27-2.326 1.61-2.902 1.166-5.675 1.186-8.331.658-.24-.047-.47-.113-.708-.16-.055-.012-.132.018-.356.055zM44.925 105.058c-.7-.789-1.24-1.202-1.523-1.748-2.916-5.635-5.793-11.29-8.675-16.943-.11-.216-.267-.449-.231-.689.044-.296.187-.724.439-.88.248-.153.85-.164 1.011-.013.586.554 1.165 1.143 1.544 1.827a227.789 227.789 0 014.015 7.606c1.263 2.508 2.454 5.052 3.65 7.592.234.494.454 1.022.484 1.579.02.356-.322.796-.714 1.669zM60.235 76.54c-.272 2.395-.463 4.568-.781 6.754-.713 4.891-1.49 9.787-2.241 14.68-.01.064-.007.127-.013.191-.065.663-.168 1.418-1.188 1.507-.865.075-.821-.61-.742-1.218.269-2.056.51-4.11.797-6.167.67-4.822 1.36-9.646 2.04-14.47.037-.256-.044-.56.11-.758.327-.421.775-.789 1.172-1.179l.846.66z"
        fill="#000"
      />
    </svg>
  )
}

export default SvgComponent