import { useId } from 'react';

import { useForm, SubmitHandler } from 'react-hook-form';
import Select from 'react-select';
import Image from 'next/image';

import { useGetUserQuery, useUpdateUserMutation } from '@/redux/api/userApi';
import Button from '@/components/custom/button/Button';

interface Props {
  styles: any;
}

type Inputs = {
  first_name: string;
  last_name: string;
  gender: string;
  phone: string;
  birthday: string;
};

const options = [
  { value: 'male', label: 'МУЖСКОЙ' },
  { value: 'female', label: 'ЖЕНСКИЙ' },
];

const selectStyles = {
  control: (base: any) => ({
    ...base,
    border: '2px solid black',
    borderRadius: 0,
    boxShadow: 'none',
    '&:hover': {
      border: '2px solid black',
    },
  }),
  indicatorSeparator: () => ({ display: 'none' }),
};

const ProfileForm = ({ styles }: Props) => {
  const { data: userData } = useGetUserQuery(null);
  const { register, handleSubmit, setValue } = useForm<Inputs>();
  const [updateUser, { isLoading }] = useUpdateUserMutation();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    updateUser({
      ...data,
      first_name: !data.first_name ? userData?.first_name : data.first_name,
      last_name: !data.last_name ? userData?.last_name : data.last_name,
      gender: !data.gender ? userData?.gender : data.gender,
      birthday: !data.birthday
        ? userData?.birthday?.slice(0, 10)
        : data.birthday,
    }).unwrap();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor='name'>
        ИМЯ
        <input
          type='text'
          id='name'
          defaultValue={userData?.first_name}
          {...register('first_name')}
          required
        />
      </label>
      <label htmlFor='surname'>
        ФАМИЛИЯ
        <input
          type='text'
          id='surname'
          defaultValue={userData?.last_name}
          {...register('last_name')}
          required
        />
      </label>
      <label htmlFor='gender'>
        ПОЛ
        <Select
          options={options}
          id='gender'
          instanceId={useId()}
          placeholder='Выберите'
          defaultValue={{
            value: userData?.gender,
            label: userData?.gender === 'male' ? 'МУЖСКОЙ' : 'ЖЕНСКИЙ',
          }}
          styles={selectStyles}
          onChange={(newValue) => setValue('gender', newValue?.value!)}
          required
        />
      </label>
      <label htmlFor='phone'>
        ТЕЛЕФОН
        <input type='text' id='phone' defaultValue={userData?.phone} required />
      </label>
      <label htmlFor='birthday'>
        ДАТА РОЖДЕНИЯ
        <input
          type='date'
          id='birthday'
          {...register('birthday')}
          defaultValue={userData?.birthday?.slice(0, 10)}
          required
        />
      </label>
      <label htmlFor='city'>
        ГОРОД
        <input type='text' id='city' value='Ташкент' disabled />
      </label>
      {/* <div className={styles.profile__avatar}>
        <Image
          src='/static/media/avatar.webp'
          alt=''
          width={100}
          height={100}
        />
        <div className={styles.profile__buttons}>
          <label htmlFor='avatar'>
            ЗАГРУЗИТЬ ДРУГОЕ
            <input type='file' id='avatar' />
          </label>
          <button>УДАЛИТЬ</button>
        </div>
      </div> */}
      <div className={styles.profile__btns}>
        <Button dark type='submit' withLoading={isLoading}>
          СОХРАНИТЬ
        </Button>
      </div>
    </form>
  );
};

export default ProfileForm;
