import React from 'react';
import {useEffect, useState} from 'react'
import { useRouter } from 'next/router';

export default function Post () {
  const router=useRouter()
  const {id}=router.query
  return (
    <div>
      <h2>Detail Page</h2>
      <p>{id}</p>
    </div>
  );
}
