const productController = require("../../controller/products");
const productModel = require("../../models/Product");
const httpMocks = require("node-mocks-http");
const newProduct = require("../data/new-product.json");
// 단위테스트이기 때문에 직접적으로 모델에 영향을 받으면 안댐. 그래서 mock 함수 이용할거임
// 실제 디비작업까지 들어가면 통합테스트 인거임
productModel.create = jest.fn();

let req, res, next;
beforeEach(() => {
  req = httpMocks.createRequest();
  res = httpMocks.createResponse();
  next = null;
});

describe("Product Controller Create", () => {
  beforeEach(() => {
    req.body = newProduct;
  });

  it("should have a createProduct function", () => {
    expect(typeof productController.createProduct).toBe("function"); //  productController의 createProduct는 함수다.
  });

  it("should call ProductModel.create", () => {
    productController.createProduct(req, res, next); // productController 안에 있는 createProduct()라는 함수가 호출될 떄
    expect(productModel.create).toBeCalledWith(newProduct); // productModel 에서 create 메소드가 호출이 되는지
  });

  it("shoulde return 201 response code", () => {
    productController.createProduct(req, res, next);
    expect(res.statusCode).toBe(201);
    expect(res._isEndCalled()).toBeTruthy(); // res.send가 잘보내졌다고
  });
});
