const Point = ({show}:{show:boolean}) => {
  return (
    <div className={` w-2 h-2 rounded-full ${show?'bg-white':''} `}></div>
  )
}
export default Point