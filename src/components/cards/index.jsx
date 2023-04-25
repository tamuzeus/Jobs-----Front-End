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
      new Date(b.updatedat).getTime() - new Date(a.updatedat).getTime() ||
      new Date(b.createdat).getTime() - new Date(a.createdat).getTime()
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
                <CompanyNameText>{job.companyname}</CompanyNameText>
              </CompanyName>
              <CityName>
                <CityNameText>{job.cityname}</CityNameText>
              </CityName>
              <StateName>
                <StateNameText>{job.statename}</StateNameText>
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