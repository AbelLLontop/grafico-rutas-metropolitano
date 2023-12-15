const Point = ({show}:{show:boolean}) => {
  return (
    <div className={` w-2 h-2 rounded-full ${show?'bg-red-500':''} `}></div>
  )
}
export default Point