'use client';

import { InformationCircleIcon } from '@heroicons/react/24/outline';
import { useEffect, useRef, useState } from 'react';

export default function LoginDemoCredentials() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('pointerdown', handlePointerDown);
    return () => document.removeEventListener('pointerdown', handlePointerDown);
  }, []);

  return (
    <div className="relative" ref={containerRef}>
      <button
        type="button"
        className="rounded-md p-1 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        aria-label="Show demo login credentials"
        aria-expanded={isOpen}
        aria-controls="demo-credentials-popover"
        onClick={() => setIsOpen((current) => !current)}
      >
        <InformationCircleIcon className="h-5 w-5" />
      </button>
      {isOpen && (
        <div
          id="demo-credentials-popover"
          className="absolute right-0 z-10 mt-2 w-64 rounded-md border border-gray-200 bg-white p-3 text-sm text-gray-700 shadow-lg"
        >
          <p className="font-medium text-gray-900">예제 로그인 정보</p>
          <dl className="mt-2 space-y-1">
            <div className="flex justify-between gap-3">
              <dt className="text-gray-500">아이디</dt>
              <dd className="font-mono text-gray-900">user@nextmail.com</dd>
            </div>
            <div className="flex justify-between gap-3">
              <dt className="text-gray-500">비번</dt>
              <dd className="font-mono text-gray-900">123456</dd>
            </div>
          </dl>
        </div>
      )}
    </div>
  );
}
