import { Table, Form, Row, Container, InputGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import styles from '../css/CheckOut.module.css';
import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { useQuery } from '@tanstack/react-query';

import { loadPaymentWidget, ANONYMOUS } from '@tosspayments/payment-widget-sdk';
import { useNavigate } from 'react-router-dom';

export default function CheckOut() {
  let price = 0;
  let navigate = useNavigate();

  let item = useSelector((state) => {
    return state.cartItem;
  });
  let user = useSelector((state) => {
    return state.user;
  });

  item.map((item) => (price += item.tprice));

  return (
    <>
      <Container className={styles.container}>
        <div id="payment-widget" />
        {/* <Row>
          <Table className={styles.table}>
            <tr>
              <th>구매자 정보</th>
            </tr>
            <tr>
              <td>이름</td>
              <td>{user.name}</td>
            </tr>
            <tr>
              <td>이메일</td>
              <td>{user.email}</td>
            </tr>
            <tr>
              <td>휴대폰번호</td>
              <td>{user.tel}</td>
            </tr>
          </Table>
        </Row>
        <Row>
          <Table className={styles.table}>
            <tr>
              <th>받는사람정보</th>
            </tr>
            <tr>
              <td>이름</td>
              <td>{user.name}</td>
            </tr>
            <tr>
              <td>배송주소</td>
              <td>{user.address}</td>
            </tr>
            <tr>
              <td>휴대폰번호</td>
              <td>{user.tel}</td>
            </tr>
            <tr>
              <td>배송요청사항</td>
              <td>
                <InputGroup>
                  <Form.Control as="textarea" aria-label="With textarea" />
                </InputGroup>
              </td>
            </tr>
          </Table>
        </Row> */}
        <Row>
          <Table className={styles.table}>
            <tr>
              <th>상품정보</th>
              <th>수량</th>
              <th>가격</th>
            </tr>
            {item.map((item) => (
              <tr>
                <td>{item.name}</td>
                <td>{item.count}</td>
                <td>{item.tprice}</td>
              </tr>
            ))}
          </Table>
        </Row>
        <Row>
          {' '}
          <Table className={styles.table}>
            <tr>
              <th>결제정보</th>
            </tr>
            <tr>
              <td>총상품가격</td>
              <td>{price}</td>
            </tr>
            <tr>
              <td>할인</td>
              <td>0</td>
            </tr>
            {/* <tr>
              <td>배송비</td>
              <td>2500</td>
            </tr> */}
            <tr>
              <td>총결제금액</td>
              <td>{price}</td>
            </tr>
            <tr>
              <td>결제방법</td>
              <td>
                <Form.Select id="payList" aria-label="paymentList">
                  <option>결제수단</option>
                  <option value="1">카드결제</option>
                  <option value="2">무통장입금</option>
                </Form.Select>
              </td>
            </tr>
          </Table>
        </Row>
        <button
          onClick={() => {
            navigate('/success');
          }}
        >
          결제하기
        </button>
      </Container>
    </>
  );
}
