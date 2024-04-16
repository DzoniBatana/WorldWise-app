import Spinner from "./Spinner";
import styles from "./CityList.module.css";
import CityItem from "./CityItem";

function CityList() {
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <ul className={styles.cityList}>
        {cities.map((city) => (
          <CityItem city={city} key={city.id} />
        ))}
      </ul>
    );
}

export default CityList;
