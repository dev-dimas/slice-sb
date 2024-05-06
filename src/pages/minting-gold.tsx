import LayoutMinting from '@/components/layout/layout-minting';
import useDocumentTitle from '@/hooks/useDocumentTitle';

export default function MintingGold() {
  useDocumentTitle('Specta Trading - Gold');

  return <LayoutMinting variant="gold" />;
}
