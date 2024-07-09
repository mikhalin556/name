import { ThreeDot } from "react-loading-indicators"
import styles from "./Loading.module.css"

function showLoading() {
    return (
        <div className={styles.loading}>
            <ThreeDot variant="pulsate" color="#0079ff" size="medium" text="" textColor="" />
        </div>
    )
}

export function LoadingComponent({loading}) {

    return (
        <>
            { loading ? showLoading() : '' }
        </>
    )
}