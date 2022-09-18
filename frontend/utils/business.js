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
    data: business,
    contentType: false,
    processData: false
  })
);

export const updateBusiness = business => {
  return $.ajax({
    url: '/api/businesses/'+business.get('business[id]'),
    method: 'patch',
    data: business,
    contentType: false,
    processData: false
  })
};

export const deleteBusiness = bsnId => (
  $.ajax({
    url: '/api/businesses/'+bsnId,
    method: 'DELETE'
  })
)