import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { Header } from '../../components/Header';
import { Search } from '../../components/Search';
import { QRItem } from '../../components/QRItem';
import { Divider } from '../../components/Divider';

import { IState } from '../../store';
import { IQRCodeList } from '../../store/modules/qrlist/types';

import { Container, EmptyListText, QRCodeList } from './styles'

export function QRList(){
  const [search, setSearch] = useState('')
  const [filteredQRCodes, setFilteredQRCOdes] = useState<string[]>([])

  const qrlist = useSelector<IState, IQRCodeList>(state => state.qrlist)

  function handleSearch() {
    const formattedSearch = search.toLowerCase().trim()

    const result = qrlist.filter(QRCode => QRCode.toLowerCase().includes(formattedSearch))
    setFilteredQRCOdes(result)
  }

  function handleClearSearch() {
    setSearch('')
    setFilteredQRCOdes([])
  }

  return (
    <Container>
      <Header title="QRCode List" />
      <Search onSearch={handleSearch} onClear={handleClearSearch} onChangeText={setSearch} value={search} />
      <QRCodeList
        data={filteredQRCodes.length ? filteredQRCodes : qrlist}
        renderItem={({ item }) => <QRItem>{item}</QRItem>}
        keyExtractor={item => item}
        ItemSeparatorComponent={() => <Divider />}
        ListEmptyComponent={() => <EmptyListText>You don't have QRCodes yet! Read some to appear in the list!</EmptyListText>}
      />
    </Container>
  );
}