import ScriptTag from 'react-script-tag';
import Image from 'next/image';;
import Link from 'next/link';
import '../styles/accordion.css'
const Download = () => {
  return (
    <div>
        <ScriptTag isHydrating={true} type="text/javascript" src="../scripts/accordion.js" />
        <button class="accordion">Section 1</button>
        <div class="panel">
        <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque eveniet
            deleniti id, tenetur ullam ipsam vitae sunt, laudantium temporibus
            consequatur architecto a magni sit tempora ea error veritatis aperiam.
            Illum.
        </p>
        </div>
    </div>
  );
};

export default Download