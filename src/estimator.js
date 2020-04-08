import { estimateNumberOfInfectedPeople, estimateInfectionsByRequestedTime } from './utils/estimate';

const covid19ImpactEstimator = (data) => {
  const inputData = data;
  const { reportedCases, periodType, timeToElapse } = data;
  const mildCurrentlyInfected = estimateNumberOfInfectedPeople(reportedCases, 10);
  const severeCurrentlyInfected = estimateNumberOfInfectedPeople(reportedCases, 50);
  const infectionsByRequestedTimeForMildCase = estimateInfectionsByRequestedTime(
    mildCurrentlyInfected,
    timeToElapse,
    3,
    periodType
  );
  const infectionsByRequestedTimeForSevereCase = estimateInfectionsByRequestedTime(
    severeCurrentlyInfected,
    timeToElapse,
    3,
    periodType
  );

  return {
    data: inputData,
    impact: {
      currentlyInfected: mildCurrentlyInfected,
      infectionsByRequestedTime: infectionsByRequestedTimeForMildCase
    },
    severeImpact: {
      currentlyInfected: severeCurrentlyInfected,
      infectionsByRequestedTime: infectionsByRequestedTimeForSevereCase
    }
  };
};

export default covid19ImpactEstimator;
