export const fetchBusinesses = () => $.ajax({
  url: '/api/businesses',
});

export const fetchBusiness = (bsnId) => $.ajax({
  url: '/api/businesses/'+bsnId
});

export const createBusiness = business => (
  $.ajax({
    url: '/api/businesses/',
    method: 'POST',
    data: { business }
  })
);

export const updateBusiness = business => {
  console.log(business);
  return $.ajax({
    url: '/api/businesses/'+business.id,
    method: 'patch',
    data: { business }
  })
};

export const deleteBusiness = bsnId => (
  $.ajax({
    url: '/api/businesses/'+bsnId,
    method: 'DELETE'
  })
)