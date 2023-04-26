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
  NoJobsMessage,
} from "./styled";

export default function Cards({ jobs }) {
  return (
    <CardsZone>
      <TitleZone>Vagas em Destaque</TitleZone>
      {jobs.length > 0 ? (
        <CardsContainer>
          {jobs.map((job) => (
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
        <NoJobsMessage>
          Não há vagas para esta busca no momento :( !
        </NoJobsMessage>
      )}
    </CardsZone>
  );
}
