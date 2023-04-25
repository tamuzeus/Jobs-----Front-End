import HeaderComponent from "../../components/header";
import { IndexStyle } from "./styled";
import { useState, useEffect } from "react";
import BodyArea from "../../components/body";
import { getAllJobsList } from "../../api/jobsList";

export default function IndexPage() {
  const [jobs, setJobs] = useState([]);
  const [originalJobs, setOriginalJobs] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const jobsData = await getAllJobsList();
      setJobs(jobsData);
      setOriginalJobs(jobsData);
    }
    fetchData();
  }, []);

  const handleSearch = (inputByName, inputByCity) => {
    let filteredJobs;

    if (inputByName || inputByCity) {
      filteredJobs = originalJobs.filter((job) => {
        const titleMatch = job.title
          .toLowerCase()
          .includes(inputByName.toLowerCase());
        const cityMatch = job.cityname
          .toLowerCase()
          .includes(inputByCity.toLowerCase());
        return titleMatch && cityMatch;
      });
    } else {
      filteredJobs = originalJobs;
    }

    setJobs(filteredJobs);
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
    </IndexStyle>
  );
}
