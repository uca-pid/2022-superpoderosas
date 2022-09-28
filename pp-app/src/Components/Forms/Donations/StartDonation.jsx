const StartDonation = ({ setStep }) => {
  return (
    <div className="mx-1 mb-6 justify-center mt-4 w-full">
      <button onClick={() => setStep(1)}
        className="rounded h-12 w-full text-center bg-orange-400 hover:bg-orange-300 uppercase font-bold text-white">
        Empezá a donar
      </button>
    </div>
  )
}

export default StartDonation