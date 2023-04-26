import Cards from "../cards/index";
import { Body, CardsContainerWrapper, NavigationButton } from "./styled";
import { useState, useEffect } from "react";

export default function BodyArea({ jobs }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [filteredJobsPage, setFilteredJobsPage] = useState([]);

  useEffect(() => {
    const sortedJobs = jobs.sort(
      (a, b) =>
        new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
    );
    setFilteredJobs(sortedJobs);
    setCurrentPage(1); // adicionando esta linha
  }, [jobs]);

  useEffect(() => {
    const lastJobIndex = currentPage * 8;
    const firstJobIndex = lastJobIndex - 8;
    const jobsPage = filteredJobs.slice(firstJobIndex, lastJobIndex);
    setFilteredJobsPage(jobsPage);
  }, [filteredJobs, currentPage]);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <Body>
      <CardsContainerWrapper>
        <NavigationButton
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          style={{ display: filteredJobs.length <= 8 ? 'none' : 'block' }}
        >
          {"<"}
        </NavigationButton>
        <Cards jobs={filteredJobsPage} />
        <NavigationButton
          onClick={handleNextPage}
          style={{ display: filteredJobs.length <= 8 ? 'none' : 'block' }}
          disabled={currentPage * 8 >= filteredJobs.length}
        >
          {">"}
        </NavigationButton>
      </CardsContainerWrapper>
    </Body>
  );
}
