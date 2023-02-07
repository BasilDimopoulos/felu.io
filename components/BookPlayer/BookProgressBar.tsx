export default function BookProgressBar(props) {
    return (
        <div className="flex flex-col items-center">
            <div className="w-3/6 bg-gray-200 h-2 dark:bg-gray-700 rounded-full">
                <div 
                style={{width: `${props.width}`}}
                className={`bg-blue-600 h-2 rounded-full`}></div>
            </div>
        </div>
    )
}