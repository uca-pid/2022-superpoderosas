import FrequencyButton from "./FrequencyButton"
import frequencyEnum from "../../../Values/frequency.enum"

const FrequencySection = () => {
  return (
    <div className="w-full flex flex-row font-Pop-M text-lg md:text-xl">
      <FrequencyButton label="Única vez" value={frequencyEnum.once} position="left"/>
      <FrequencyButton label="Mensual" value={frequencyEnum.monthly} position= "right"/>
    </div>
  )
}


export default FrequencySection