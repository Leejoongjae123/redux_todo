import React from 'react';
import {useEffect, useState} from 'react'
import Link from 'next/link'

export default function Nav () {
  return (
    <nav>
      <ul>
        <Link href="/"><a><li>Home</li></a></Link>
        <li>MyPage</li>
      </ul>
    </nav>
  );
}
