 import nftImage from '../assets/image-equilibrium.jpg'
 import viewIcon from '../assets/icon-view.svg'

function Image() {
  return (
    <div className="relative group rounded-md h-60 w-full overflow-hidden">
    {/* Background overlay */}
    <div className="absolute inset-0 bg-cyan  opacity-0 group-hover:opacity-40 transition-opacity"></div>
  
    {/* Centered icon that appears on hover */}
    <img
      src={viewIcon}
      alt=""
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden z-20 group-hover:block"
    />
  
    {/* NFT Image */}
    <img
      src={nftImage}
      alt="nft"
      className="block h-60 w-full object-cover rounded-md"
    />
  </div>
  
  )
}

export default Image