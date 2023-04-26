import HeaderComponent from "../../components/header";
import { IndexStyle } from "./styled";
import { useState, useEffect } from "react";
import BodyArea from "../../components/body";
import { getAllJobsList } from "../../api/jobsList";
import Footer from "../../components/footer";

export default function IndexPage() {
  const [jobs, setJobs] = useState([]);
  const [originalJobs, setOriginalJobs] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const jobsData = await getAllJobsList(); //Api e armazenar a lista original e uma editavel
      setJobs(jobsData);
      setOriginalJobs(jobsData);
    }
    fetchData();
  }, []);

  const handleSearch = (inputByName, inputByCity) => {
    let filteredJobs;

    if (inputByName || inputByCity) {
      //Fazer filtragem do jobs filtrados(nome e cidade)
      filteredJobs = originalJobs.filter((job) => {
        const titleMatch = job.title
          .toLowerCase()
          .includes(inputByName.toLowerCase());
        const cityMatch = job.cityName
          .toLowerCase()
          .includes(inputByCity.toLowerCase());
        return titleMatch && cityMatch;
      });
    } else {
      filteredJobs = originalJobs;
    }

    setJobs(filteredJobs); //Armazena em jobs(editavel) os filtrados
  };

  return (
    <IndexStyle>
      <HeaderComponent
        onSearch={handleSearch}
        originalJobs={originalJobs}
        jobs={jobs}
        setJobs={setJobs}
      />
      <BodyArea jobs={jobs} />
      <Footer />
    </IndexStyle>
  );
}
