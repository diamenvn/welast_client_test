const BUBBLE_ITEMS = [
  {
    title: 'Import đơn hàng',
    action: { importOrder: true },
  },
  {
    title: 'Tạo sản phẩm mới',
    action: { createProduct: true, productId: null },
  },
  {
    title: 'Tạo đơn hàng mới',
    action: { createOrder: true },
  },
  {
    title: 'Tạo khách hàng mới',
    action: { createCustomer: true },
  },
  {
    title: 'Kết nối API store',
    action: { connectApiStore: true },
  },
];

export const bubbleConfig = {
  BUBBLE_ITEMS,
};
