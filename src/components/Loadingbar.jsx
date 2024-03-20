import React from 'react'
import LoadingBar from 'react-top-loading-bar'

const Loadingbar = () => {
    const [progress, setProgress] = useState(0)
  
  
  return (
    <>
    <div>
      <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      </div>
    </>
  )
}

export default Loadingbar