import Link from 'next/link';
import {
  FacebookShareButton,
  FacebookIcon,
  PinterestShareButton,
  PinterestIcon,
  RedditShareButton,
  RedditIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from 'next-share';
export default function Footer() {
    return (
      <>
        <div className="JetBrains-medium mx-auto flex max-w-[100rem] flex-col items-center py-8 px-8 pt-4 md:items-center md:justify-between md:px-6 lg:flex-row lg:justify-between lg:px-8">
          <div>
            <a href="#" className="text-3xl text-white">
              Illusio
            </a>
          </div>
          <div className="JetBrains-light lg:text-md my-6 space-x-6 text-sm lg:my-0 lg:space-x-12">
            <a href="https://github.com/Illusio-language">Github</a>
            <Link href="/documentation"><a>Docs</a></Link>
            <Link href="/team"><a>Team</a></Link> 
            <Link href="/download"><a>download</a></Link>
            <Link href="/change"><a>Change Logs</a></Link>
            <a href="mailto: illusiolang@outlook.com">Contact</a>

          </div>
        </div>
      </>
    );
  }
  