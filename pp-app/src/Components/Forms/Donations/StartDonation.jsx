import { useFrequency } from  '../../../Context/FrequencyContext'
const StartDonation = ({ setStep }) => {
  const { selectedFrequency } = useFrequency()
  return (
      <button onClick={() => setStep(1)}
        className="rounded-xl p-4 h-auto w-full text-center greenBg yellowBgHover font-Pop-SB text-2xl text-white">
        {(selectedFrequency === 1)  ? "Donar" : "Donar Mensualmente"}
      </button>
  )
}

export default StartDonation