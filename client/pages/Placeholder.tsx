interface PlaceholderProps {
  title: string;
}

export default function Placeholder({ title }: PlaceholderProps) {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-6 py-20">
      <div className="text-center max-w-md">
        <div className="w-16 h-16 rounded-full bg-navy/10 flex items-center justify-center mx-auto mb-6">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.5 10.002L7 4.002M7 4.002L11.311 8.705C11.897 9.344 12.19 9.663 12.575 9.833C12.959 10.002 13.393 10.002 14.26 10.002H22.5L18.189 5.299C17.603 4.66 17.31 4.341 16.925 4.171C16.541 4.001 16.107 4.001 15.24 4.001L7 4.002ZM11 8.5V20H7C5.114 20 4.172 20 3.586 19.414C3 18.828 3 17.885 3 16V8.5" stroke="#0A1634" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M11 20H17C18.886 20 19.828 20 20.414 19.414C21 18.828 21 17.885 21 16V10M4 7V4M7.125 11.25H7M7 20V16M15 14H17" stroke="#0A1634" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h1 className="text-2xl font-medium text-black mb-3">{title}</h1>
        <p className="text-gray-500 text-sm leading-relaxed">
          This page is coming soon. Continue prompting to build out this page's content.
        </p>
      </div>
    </div>
  );
}
