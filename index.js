const cockroachSpeed = (s) => {
  return Math.floor((s * 100000) / 3600);
};

cockroachSpeed(1.08);

//108,000 cm / 3600
//1 km is equal to 100,000 cm. 1 hour is equal to 3600 sec. So converted version is 7,200,000 cm / 3600 sec. = 2000 cm / sec.
