import IonicIcon from '@expo/vector-icons/Ionicons'
const Icon = (props) => {
    const {name} = props
    return (
        <IonicIcon name={name} size={20} {...props} />
    )
}
export default Icon