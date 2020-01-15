const { format: formatPrice } = new Intl.NumberFormat('en-Au', {
  style: 'currency',
  currency: 'AUD',
});

export { formatPrice as default };
