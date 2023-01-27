export default function BookProgressBar(props) {
    return (
        <div className="flex flex-col items-center">
            <div className="w-5/6 bg-gray-200 h-2.5 dark:bg-gray-700">
                <div className={`${props.width} bg-blue-600 h-2.5`}></div>
            </div>
        </div>
    )
}