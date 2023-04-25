import {
  CardsZone,
  CardBody,
  CardsContainer,
  Title,
  TitleText,
  TitleZone,
  CityName,
  CityNameText,
  StateName,
  StateNameText,
  Description,
  DescriptionText,
  CompanyName,
  CompanyNameText,
  NoJobsMessage
} from "./styled";

export default function Cards({ jobs }) {
  const filteredJobs = jobs.sort(
    (a, b) =>
      new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime() ||
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  return (
    <CardsZone>
      <TitleZone>Vagas em Destaque</TitleZone>
      {filteredJobs.length > 0 ? (
        <CardsContainer>
          {filteredJobs.map((job) => (
            <CardBody key={job.id}>
              <Title>
                <TitleText>{job.title}</TitleText>
              </Title>
              <Description>
                <DescriptionText>{job.description}</DescriptionText>
              </Description>
              <CompanyName>
                <CompanyNameText>{job.companyName}</CompanyNameText>
              </CompanyName>
              <CityName>
                <CityNameText>{job.cityName}</CityNameText>
              </CityName>
              <StateName>
                <StateNameText>{job.stateName}</StateNameText>
              </StateName>
            </CardBody>
          ))}
        </CardsContainer>
      ) : (
        <NoJobsMessage>Não há vagas para esta busca no momento :( !</NoJobsMessage>
      )}
    </CardsZone>
  );
}