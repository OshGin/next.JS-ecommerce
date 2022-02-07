import Head from 'next/head';
import Layout from './components/Layout';
import Image from 'next/image';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Luca-Victoria-Karla Enzio-Barrabassa</title>
        <meta name="ecommerce picture store" content="click and buy" />
      </Head>
      <main>
        <h1>Luca-Victoria-Karla Enzio-Barrabassa</h1>
        <Image
          src="/Luca-Victoria.jpg"
          width={200}
          height={300}
          alt="Profil Picture"
        />
        <p>
          Luca-Victoria-Karla Enzio-Barrabassa was born in winter 1988 in a
          village that is now known as Markhof. In her early years, she desided
          to travel the world and bring all sorts of interpretations back to her
          friends and family. <br /> pretium quis, sem. Nulla consequat massa
          quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate
          eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
          justo. <br />
          <br />
          Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras
          dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend
          tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
          enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
          Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
          Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur
          ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas
          tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit
          amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel,
          luctus pulvinar, hendrerit id, lorem.
          <br /> Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien
          ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci
          eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet
          nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum
          sodales, augue velit cursus nunc.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu. <br /> pretium quis, sem. Nulla
          consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
          nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
          venenatis vitae, justo. <br />
          <br />
          Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras
          dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend
          tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
          enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
          Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
          Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur
          ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas
          tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit
          amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel,
          luctus pulvinar, hendrerit id, lorem.
          <br /> Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien
          ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci
          eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet
          nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum
          sodales, augue velit cursus nunc.
        </p>
      </main>
    </Layout>
  );
}
