import React from 'react'

export default function Banner() {
  return (
    <div class="bg-[#182b50] px-20 font-[sans-serif]">
    <div class="max-w-6xl mx-auto grid md:grid-cols-2 justify-center items-center gap-4">
      <div class="text-center md:text-left">
        <h2 class="text-4xl lg:text-5xl font-extrabold text-white mb-6 md:!leading-[55px]">Unlock Premium Features</h2>
        <p class="text-lg lg:text-xl text-white mb-8">Upgrade to our premium plan and supercharge your experience. Don&apost miss out!</p>
        <a href="#" class="bg-[#a91079] hover:bg-opacity-80 text-white py-3 px-10 rounded-full text-lg lg:text-xl font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl inline-block">
          Upgrade Now
        </a>
      </div>
      <div class="text-center">
        <img src="https://readymadeui.com/feature-img.webp" alt="Premium Benefits" class="w-11/12 mx-auto" />
      </div>
    </div>
  </div>
  )
}
